
const express = require('express')
import {handler7831} from "./handler7831";
const app = express()
app.get('/7831', handler7831)
app.listen(3000, () => {})
        