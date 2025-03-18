
const express = require('express')
import {handler7269} from "./handler7269";
const app = express()
app.get('/7269', handler7269)
app.listen(3000, () => {})
        