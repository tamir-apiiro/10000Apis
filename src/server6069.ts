
const express = require('express')
import {handler6069} from "./handler6069";
const app = express()
app.get('/6069', handler6069)
app.listen(3000, () => {})
        