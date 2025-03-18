
const express = require('express')
import {handler6084} from "./handler6084";
const app = express()
app.get('/6084', handler6084)
app.listen(3000, () => {})
        