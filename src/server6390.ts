
const express = require('express')
import {handler6390} from "./handler6390";
const app = express()
app.get('/6390', handler6390)
app.listen(3000, () => {})
        