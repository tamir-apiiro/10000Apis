
const express = require('express')
import {handler864} from "./handler864";
const app = express()
app.get('/864', handler864)
app.listen(3000, () => {})
        