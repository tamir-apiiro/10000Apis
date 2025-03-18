
const express = require('express')
import {handler3475} from "./handler3475";
const app = express()
app.get('/3475', handler3475)
app.listen(3000, () => {})
        