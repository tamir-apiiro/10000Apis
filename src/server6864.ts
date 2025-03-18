
const express = require('express')
import {handler6864} from "./handler6864";
const app = express()
app.get('/6864', handler6864)
app.listen(3000, () => {})
        