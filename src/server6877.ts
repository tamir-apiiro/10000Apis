
const express = require('express')
import {handler6877} from "./handler6877";
const app = express()
app.get('/6877', handler6877)
app.listen(3000, () => {})
        