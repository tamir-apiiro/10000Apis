
const express = require('express')
import {handler9814} from "./handler9814";
const app = express()
app.get('/9814', handler9814)
app.listen(3000, () => {})
        