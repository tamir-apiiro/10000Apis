
const express = require('express')
import {handler9822} from "./handler9822";
const app = express()
app.get('/9822', handler9822)
app.listen(3000, () => {})
        