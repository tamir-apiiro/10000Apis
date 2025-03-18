
const express = require('express')
import {handler6857} from "./handler6857";
const app = express()
app.get('/6857', handler6857)
app.listen(3000, () => {})
        