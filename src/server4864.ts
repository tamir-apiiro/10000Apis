
const express = require('express')
import {handler4864} from "./handler4864";
const app = express()
app.get('/4864', handler4864)
app.listen(3000, () => {})
        