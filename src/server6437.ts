
const express = require('express')
import {handler6437} from "./handler6437";
const app = express()
app.get('/6437', handler6437)
app.listen(3000, () => {})
        