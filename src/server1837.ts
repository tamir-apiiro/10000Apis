
const express = require('express')
import {handler1837} from "./handler1837";
const app = express()
app.get('/1837', handler1837)
app.listen(3000, () => {})
        