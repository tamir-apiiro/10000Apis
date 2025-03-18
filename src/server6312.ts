
const express = require('express')
import {handler6312} from "./handler6312";
const app = express()
app.get('/6312', handler6312)
app.listen(3000, () => {})
        