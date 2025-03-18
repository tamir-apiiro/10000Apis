
const express = require('express')
import {handler1159} from "./handler1159";
const app = express()
app.get('/1159', handler1159)
app.listen(3000, () => {})
        