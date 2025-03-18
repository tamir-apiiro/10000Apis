
const express = require('express')
import {handler9381} from "./handler9381";
const app = express()
app.get('/9381', handler9381)
app.listen(3000, () => {})
        