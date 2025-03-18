
const express = require('express')
import {handler7069} from "./handler7069";
const app = express()
app.get('/7069', handler7069)
app.listen(3000, () => {})
        