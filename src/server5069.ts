
const express = require('express')
import {handler5069} from "./handler5069";
const app = express()
app.get('/5069', handler5069)
app.listen(3000, () => {})
        