
const express = require('express')
import {handler336} from "./handler336";
const app = express()
app.get('/336', handler336)
app.listen(3000, () => {})
        