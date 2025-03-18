
const express = require('express')
import {handler6604} from "./handler6604";
const app = express()
app.get('/6604', handler6604)
app.listen(3000, () => {})
        