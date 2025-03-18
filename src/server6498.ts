
const express = require('express')
import {handler6498} from "./handler6498";
const app = express()
app.get('/6498', handler6498)
app.listen(3000, () => {})
        