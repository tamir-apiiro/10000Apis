
const express = require('express')
import {handler6616} from "./handler6616";
const app = express()
app.get('/6616', handler6616)
app.listen(3000, () => {})
        