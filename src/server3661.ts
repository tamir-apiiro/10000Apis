
const express = require('express')
import {handler3661} from "./handler3661";
const app = express()
app.get('/3661', handler3661)
app.listen(3000, () => {})
        