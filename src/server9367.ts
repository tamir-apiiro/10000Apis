
const express = require('express')
import {handler9367} from "./handler9367";
const app = express()
app.get('/9367', handler9367)
app.listen(3000, () => {})
        