
const express = require('express')
import {handler9398} from "./handler9398";
const app = express()
app.get('/9398', handler9398)
app.listen(3000, () => {})
        