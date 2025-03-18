
const express = require('express')
import {handler9956} from "./handler9956";
const app = express()
app.get('/9956', handler9956)
app.listen(3000, () => {})
        