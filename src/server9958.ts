
const express = require('express')
import {handler9958} from "./handler9958";
const app = express()
app.get('/9958', handler9958)
app.listen(3000, () => {})
        