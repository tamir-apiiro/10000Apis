
const express = require('express')
import {handler6497} from "./handler6497";
const app = express()
app.get('/6497', handler6497)
app.listen(3000, () => {})
        