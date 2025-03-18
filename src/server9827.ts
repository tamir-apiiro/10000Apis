
const express = require('express')
import {handler9827} from "./handler9827";
const app = express()
app.get('/9827', handler9827)
app.listen(3000, () => {})
        