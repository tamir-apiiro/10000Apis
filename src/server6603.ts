
const express = require('express')
import {handler6603} from "./handler6603";
const app = express()
app.get('/6603', handler6603)
app.listen(3000, () => {})
        