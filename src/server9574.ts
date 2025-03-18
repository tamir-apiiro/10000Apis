
const express = require('express')
import {handler9574} from "./handler9574";
const app = express()
app.get('/9574', handler9574)
app.listen(3000, () => {})
        