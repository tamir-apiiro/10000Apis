
const express = require('express')
import {handler9476} from "./handler9476";
const app = express()
app.get('/9476', handler9476)
app.listen(3000, () => {})
        