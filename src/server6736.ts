
const express = require('express')
import {handler6736} from "./handler6736";
const app = express()
app.get('/6736', handler6736)
app.listen(3000, () => {})
        