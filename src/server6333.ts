
const express = require('express')
import {handler6333} from "./handler6333";
const app = express()
app.get('/6333', handler6333)
app.listen(3000, () => {})
        