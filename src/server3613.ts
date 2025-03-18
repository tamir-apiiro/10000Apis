
const express = require('express')
import {handler3613} from "./handler3613";
const app = express()
app.get('/3613', handler3613)
app.listen(3000, () => {})
        