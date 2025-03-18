
const express = require('express')
import {handler3534} from "./handler3534";
const app = express()
app.get('/3534', handler3534)
app.listen(3000, () => {})
        