
const express = require('express')
import {handler2069} from "./handler2069";
const app = express()
app.get('/2069', handler2069)
app.listen(3000, () => {})
        