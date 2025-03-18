
const express = require('express')
import {handler6886} from "./handler6886";
const app = express()
app.get('/6886', handler6886)
app.listen(3000, () => {})
        