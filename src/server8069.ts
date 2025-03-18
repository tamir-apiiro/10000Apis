
const express = require('express')
import {handler8069} from "./handler8069";
const app = express()
app.get('/8069', handler8069)
app.listen(3000, () => {})
        