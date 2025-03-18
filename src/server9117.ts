
const express = require('express')
import {handler9117} from "./handler9117";
const app = express()
app.get('/9117', handler9117)
app.listen(3000, () => {})
        