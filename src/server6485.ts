
const express = require('express')
import {handler6485} from "./handler6485";
const app = express()
app.get('/6485', handler6485)
app.listen(3000, () => {})
        