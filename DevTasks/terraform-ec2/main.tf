terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
        version = ">= 3.0"
      
          }
  }

  required_version = ">= 1.0"
}

provider "aws" {
  region = "us-east-1"  # Replace with your desired AWS region
}

resource "aws_instance" "example" {
  count         = 2
  ami           = "ami-014d544cfef21b42d"  # Replace with your desired AMI ID
  instance_type = "t2.micro"

  tags = {
    Name = "example-instance-${count.index + 1}"
  }
}

output "instance_ips" {
  value = aws_instance.example[*].public_ip
}
