
const express = require('express')
import {handler1397} from "./handler1397";
const app = express()
app.get('/1397', handler1397)
app.listen(3000, () => {})
        