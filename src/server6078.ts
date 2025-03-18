
const express = require('express')
import {handler6078} from "./handler6078";
const app = express()
app.get('/6078', handler6078)
app.listen(3000, () => {})
        