
const express = require('express')
import {handler6299} from "./handler6299";
const app = express()
app.get('/6299', handler6299)
app.listen(3000, () => {})
        