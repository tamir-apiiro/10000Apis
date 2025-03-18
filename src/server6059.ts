
const express = require('express')
import {handler6059} from "./handler6059";
const app = express()
app.get('/6059', handler6059)
app.listen(3000, () => {})
        