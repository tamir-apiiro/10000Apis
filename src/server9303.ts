
const express = require('express')
import {handler9303} from "./handler9303";
const app = express()
app.get('/9303', handler9303)
app.listen(3000, () => {})
        