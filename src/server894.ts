
const express = require('express')
import {handler894} from "./handler894";
const app = express()
app.get('/894', handler894)
app.listen(3000, () => {})
        