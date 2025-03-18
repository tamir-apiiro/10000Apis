
const express = require('express')
import {handler9453} from "./handler9453";
const app = express()
app.get('/9453', handler9453)
app.listen(3000, () => {})
        