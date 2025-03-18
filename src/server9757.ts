
const express = require('express')
import {handler9757} from "./handler9757";
const app = express()
app.get('/9757', handler9757)
app.listen(3000, () => {})
        