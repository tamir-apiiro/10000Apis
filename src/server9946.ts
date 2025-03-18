
const express = require('express')
import {handler9946} from "./handler9946";
const app = express()
app.get('/9946', handler9946)
app.listen(3000, () => {})
        