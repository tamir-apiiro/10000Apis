
const express = require('express')
import {handler6221} from "./handler6221";
const app = express()
app.get('/6221', handler6221)
app.listen(3000, () => {})
        